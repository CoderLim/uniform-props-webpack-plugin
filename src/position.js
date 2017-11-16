/*
 *  Insertion Position
 *
 *  e.g:
 *  There is a function call, and I'm about to insert a string `xxxx` into it.
 *  AFTER_FIRST_PARAM_END:    fn({name: 'glm'}) ---> fn({name: 'glm'}, xxxx)
 *  BEFORE_SECOND_PARAM_END:  fn({name: 'glm'}, {name: 'zwr'}) ---> fn({name: 'glm'}, {name: 'zwr', xxxx})
 *  REPLACE_SECOND_PARAM:     fn({name: 'glm'}, second-param) ---> fn({name: 'glm'}, xxxx)
 */
export const AFTER_FIRST_PARAM_END = Symbol('afterFirstParam');
export const BEFORE_SECOND_PARAM_END = Symbol('BEFORE_SECOND_PARAM_END');
export const REPLACE_SECOND_PARAM =  Symbol('REPLACE_SECOND_PARAM');
