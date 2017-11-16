import { ReplaceSource } from 'webpack-sources';
import Insertion from './insertion.js';
import {
  AFTER_FIRST_PARAM_END,
  BEFORE_SECOND_PARAM_END,
  REPLACE_SECOND_PARAM
} from './position.js';

export default class UniformPropsPlugin {
  constructor(options) {
    /*
     *  the future options:
     *
     *  {
     *    function: 'React.createElement',
     *    override: true,
     *    properties: {
     *      eye: 'small',
     *       nose: 'big'
     *    }
     *  }
     *
     * and now it is like:
     * { size: 'small' }
     * only one property.
     *
     */
    this.options = options;
    this.insertionMap = new Map();
  }

  addInsertion (module, insertion) {
    if (!module || !insertion) return;
    let values = this.insertionMap.get(module) || [];
    values.push(insertion);
    this.insertionMap.set(module, values);
  }

  propertyExists (props, key) { 
    return  props.some((prop) => prop.key.name === key);
  }

  dealWithSecondParam (second) {
    const methods = {
      'ObjectExpression': () =>  {
        const props = second.properties;
        if (!this.propertyExists(props, 'size')) {
          return new Insertion(BEFORE_SECOND_PARAM_END, second.range);
        } else {
          //  If the specified prop has been set, then do nothing.
        }
      },
      'Literal': () =>  new Insertion(REPLACE_SECOND_PARAM, second.range)
    };
    return methods[second.type]();
  }

  apply (compiler) {
    compiler.plugin('compilation', (compilation, params) => {
      compilation.plugin('build-module', (module) => {
        // Assignment here is not right absolutely!
        // Because every module will execute `build-module`, which is not nessessary execute `parser` for them.
        // The compilation's timeline can be:
        // module1 -> build-module
        // module2 -> build-module
        // module3 -> build-module
        // module1 -> parser
        // however, now this.module is not module1!
        //
        // this.module = module;
      });

      params.normalModuleFactory.plugin('parser', (parser, parserOptions) => {
        // some modules maybe not need parse
        // e.g. modules specified by `exclude: node_modules` key word in webpack.conf.js
        parser.plugin('call React.createElement', (expr) => {
          let module = null;
          if (module = parser.state.module) {
            const { arguments: args } = expr;
            const first = args[0];
            const second = args[1];
            let newInsertion = null;
            debugger;
            if (args.length > 1) {
              // generate Insertion according to second parameter.
              newInsertion = this.dealWithSecondParam(second);
            } else {
              newInsertion = new Insertion(AFTER_FIRST_PARAM_END, first.range);
            }
            this.addInsertion(module, newInsertion);
          }
        });
      });

      compilation.plugin('succeed-module', (module) => {
        let insertions = this.insertionMap.get(module);
        if (!insertions) return;
        let source = new ReplaceSource(module._source);
        debugger;
        insertions.forEach(insertion => {
          // console.log(module._source._value.substring(insertion.range[0], insertion.range[1]));
          insertion.applyTo(source, 'size: \'small\'');
        });
        module._source = source;
        // clear insertions of the module
        this.insertionMap.delete(module);
      });
    });
  }
}

