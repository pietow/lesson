/**
 * in mongoose:
 * 1- connect to MongoDb school database
 * 2- create collection students with fllowing fields:
 *      a- name: String [5, 20] required
 *      b- email: String [12, 50] required email expression
 *      c- matrik_id: String [6], required, first tow letters and the rest is numbers, unique ex: RB5692
 *      d- class_id: Number [less than 100] required
 *      e- skills: Array of Strings (NOT REQUIRED)
 *      f- address: Object
 *              1- Country String [5, 20] required
 *              2- city String [5, 20] required
 *              3- street String  [5, 20] NOT REQUIRED
 */