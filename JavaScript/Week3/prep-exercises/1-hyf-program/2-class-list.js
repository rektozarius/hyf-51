import { modules, students, mentors, classes } from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
const getPeopleOfClass = (className) => {
  let peopleOfClass = [];
  let currentModule = "";

  students.forEach((element) => {
    if (element.class === className) {
      peopleOfClass.push({name: element.name, role: "student"});
    }
  });

  classes.forEach((element) => {
    if (element.name === className) {
      currentModule = element.currentModule;
    }
  });

  mentors.forEach((element) => {
    if (element.nowTeaching === currentModule) {
      peopleOfClass.push({name: element.name, role: "mentor"});
    }
  });
  return peopleOfClass;
};
// You can uncomment out this line to try your function
// console.log(getPeopleOfClass('class34'));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
const getActiveClasses = () => {
  let activeClasses = {};
  classes.forEach((element) => {
    if (element.active) {
      activeClasses[element.name] = getPeopleOfClass(element.name);
    }
  });
  return activeClasses;
};
// You can uncomment out this line to try your function
console.log(getActiveClasses());