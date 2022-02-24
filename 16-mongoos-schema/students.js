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
 *              1- country String [5, 20] required
 *              2- city String [5, 20] required
 *              3- street String  [5, 20] NOT REQUIRED
 */
const mongoose = require("mongoose");
const { log } = require("console");
mongoose.connect("mongodb://localhost:27017/test", (error) => {
    if (error) throw error;
    log("Connected To MongoDb");
});

const students_schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: [5, "Length should be more than 5"],
            maxlength: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minlength: 12,
            maxlength: 50,
            validate: {
                validator: (em) => {
                    const EmailRegEx =
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                    return EmailRegEx.test(em);
                },
                message: 'Not a valied Email'
            },
        },
        matrik_id: {
            type: String,
            length: 6,
            required: true,
            validate: {
                validator: mk => {
                    const mkReg = /[A-Z]{2}\d{4}/
                    return mkReg.test(mk)
                },
                message: 'Not a valid Matrik nummer'
            }
        },
        class_id: {
            type: Number,
            required: true,
            max: 100
        },
        skills: {
            type: [{// for each item inside
                type: String,
                minlength: 2,
                maxlength: 10
            }],
            validate: [
                (arr)=>arr.length<=3,
               `Should be less than 3 items`
            ]
        },
        address: {
            country: {
                type: String,
                required: true,
                minlength: [5, "Length should be more than 5"],
                maxlength: 20,
            },
            city: {
                type: String,
                minlength: [5, "Length should be more than 5"],
                maxlength: 20
            },
            street: {
                type: String,
                minlength: [5, "Length should be more than 5"],
                maxlength: 20
            }
        }
    },
    { collection: "students" }
);
const Students = mongoose.model('Students', students_schema)
let student_1 = {
    name: "Heiko",
    email: "heiko@gmail.com",
    matrik_id: "RB3456",
    class_id: 2,
    skills: ["Javascript", "C#", "CSS"],
    address:{
        country: "Germany",
        city: "Hamburg",
        street: "Main Street"
    }
}
Students.create(student_1).then(result=>{
    log("Success",result)
}).catch(error=>log(error.message))