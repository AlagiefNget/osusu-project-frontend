import $ from "jquery";
import Utils from "../utils/utils";

import {Api} from "../config/api_config";
import * as cookies from "react-cookies";

export default class coursesService {

    /*
    * Method to create/edit a course
    * Parameters:
    * + data: The data of the course to be added/edited
    * + callback: The method to handle the response coming from the server
    * method is POST if creating
    * method is PUT if editing
    * */
    static createCourse(data, callback) {
        const id = (data._id) ? data._id.$oid : '';
        const _method = (id) ? "PUT" : "POST";

        let _data = {...data};
        _data.departmentId = (_data.departmentId.value) ? _data.departmentId.value : _data.departmentId;
        _data.programId = (_data.programId.value) ? _data.programId.value : _data.programId;

        $.ajax({
            method: _method,
            url: Api.DEV_BASE_URL + "/v1/courses/" + id,
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            data: _data,
            success: function (result) {
                callback(result);
            },
            error: function (e) {
                Utils.displayMessage('error', 'Failed', 'Course could not be saved');
            }
        })
    };

    /*
    * Method to load all courses of a learning center into a data table
    * Parameters:
    * + query: The query sent by the data table
    * + resolve: callback method to process the received list of courses
    * + callback: The method to handle the response coming from the server
    * */
    static loadCoursesData = (query, resolve, reject, callback) => {
        let url = Utils.compileQuery(query, (Api.DEV_BASE_URL + "/v1/courses"),
            ["id", "name", "contact_hours", "course_code", "department_name", "suspended", "duration", "can_be_deleted", "program_name"], [{
                "by": "desc",
                "attr": "name"
            }],
            "Academics::Course", null, null, null);
        fetch(url, {
            dataType: "json",
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            }
        })
            .then(response => {
                return response.json()
            })
            .then(result => {
                resolve({
                    data: result.data,
                    page: query.page,
                    totalCount: result.total
                });
                callback();
            });
    };

    /*
    * Method to get the attendances added for a course
    * Parameters:
    * + courseId: The id of the course to get attendances for
    * + setName: The class set of the course
    * + useDate: The date of attendance to retrieve
    * + callback: The method to handle the response coming from the server
    * */
    static getEnterAttendance(courseId, setName, useDate, callback){
      $.ajax({
         method: 'GET',
         url: Api.DEV_BASE_URL + '/v1/teachers/take_attendance',
         headers: {
             "Authorization": "token " + cookies.load("token"),
             "UserProfile": cookies.load("profile"),
             "UserKey": cookies.load('User-Key')
         },
          data: {course_id: courseId, set_name: setName, date: useDate},
          success: function(result){
             callback(result);
          },
          error: function(e){
             Utils.displayMessage('error','Failed', 'Unable to attendance records');
          }
      });
    };

    /*
    * Method to get the details of a course
    * Parameters:
    * + id: The id of the course to get details for
    * + callback: The method to handle the response coming from the server
    * */
    static loadCourse(id, callback) {
        $.ajax({
            method: "GET",
            url: Api.DEV_BASE_URL + "/v1/courses/" + id,
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            success: function (result) {
                callback(result);
            },
            error: function (e) {
                Utils.displayMessage('error', 'Failed', 'Course could not be loaded').then(r => r);
            }
        })
    };

    /*
    * Method to get the different group sets of a course
    * Parameters:
    * + id: The id of the course to get details for
    * + callback: The method to handle the response coming from the server
    * */
    static getClassSets(id, callback) {
        $.ajax({
            method: "GET",
            url: Api.DEV_BASE_URL + "/v1/courses/get_class_sets",
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            data: {course_id: id},
            success: function (result) {
                callback(result.class_sets);
            },
            error: function (e) {
                Utils.displayMessage('error', 'Failed', 'Course group sets not be loaded').then(r => r);
            }
        })
    };

    /*
    * Method to delete a course
    * Parameters:
    * + id: The id of the course to be deleted
    * + callback: The method to handle the response coming from the server
    * */
    static deleteCourse = (id, callback) => {
        $.ajax({
            method: "DELETE",
            url: Api.DEV_BASE_URL + "/v1/courses/" + id,
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            dataType: "json",
            success: function (result) {
                callback(result)
            },
            error: function (e) {
                Utils.displayMessage('error', 'Failed', 'Course could not be deleted');
            }
        });
    };

    /*
    * Method to load the list of programmes and departments for course form select fields
    * Parameters:
    * + callback: The method to handle the response coming from the server
    * */
    static loadDeptsProgs = (callback) => {
        $.ajax({
            method: "GET",
            url: Api.DEV_BASE_URL + "/v1/courses/get_depts_programs",
            dataType: "json",
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            success: function (result) {
                callback(result);
            },
            error: function (e) {
                Utils.displayMessage('error', 'Failed', 'Program could not be loaded')
            }
        });
    };

    /*
    * Method to assign a course to a teacher
    * Parameters:
    * + data: The id of the course and the teacher
    * + callback: The method to handle the response coming from the server
    * */
    static assignTeacher(data, callback) {
        $.ajax({
            method: "POST",
            url: Api.DEV_BASE_URL + "/v1/courses/assign_course",
            data: data,
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            success: function (result) {
                callback(result);
            },
            error: function (e) {

            }
        })
    };

    /*
    * Method to load the assigned teachers to a course
    * Parameters:
    * + id: The id of the course to load assigned teachers for
    * + callback: The method to handle the response coming from the server
    * */
    static loadAssignedTeachers(id, callback) {
        $.ajax({
            method: "GET",
            url: Api.DEV_BASE_URL + "/v1/courses/assigned_teachers",
            data: {course_id: id},
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            success: function (result) {
                callback(result.teachers)
            },
            error: function (e) {
                Utils.displayMessage('error', 'Failed', 'Assigned Teachers could not be loaded');
            }
        })
    };

    /*
    * Method to search student by number to add to a course
    * Parameters:
    * + id: The number of the student being searched
    * + callback: The method to handle the response coming from the server
    * */
    static searchStudent(data, callback) {
            $.ajax({
                method: "GET",
                url: Api.DEV_BASE_URL + "/v1/students/get_student",
                headers: {
                    "Authorization": "token " + cookies.load("token"),
                    "UserProfile": cookies.load("profile"),
                    "UserKey": cookies.load('User-Key')
                },
                data: {number_search: data},
                success: function (result) {
                    callback(result.student)
                },
                error: function (e) {
                    Utils.displayMessage('error', 'Failed', 'Student could not be loaded');
                }
            })
    };

    /*
    * Method to delete a course
    * Parameters:
    * + id: The id of the course to be deleted
    * + callback: The method to handle the response coming from the server
    * */
    static addStudentToCourse = (data, callback) => {
        $.ajax({
            method: "POST",
            url: Api.DEV_BASE_URL + "/v1/courses/add_students",
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            data: data,
            success: function (result) {
                callback(result);
            },
            error: function (e) {
                Utils.displayMessage('error', 'Failed', 'Course could not be added for the student(s)').then(r => r);
            }
        })
    };

    /*
    * Method to add an assessment for a course
    * Parameters:
    * + id: The data of the assessment to be added
    * + callback: The method to handle the response coming from the server
    * */
    static addAssessment = (data, callback) => {
        $.ajax({
            method: "POST",
            url: Api.DEV_BASE_URL + "/v1/teachers/add_assessment",
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            data: data,
            success: function (result) {
                Utils.displayMessage('success', 'Successful', "Assessment successfully added for course");
                callback();
            },
            error: function (e) {
                Utils.displayMessage('error', 'Failed', 'Assessment could not be added');
            }
        })
    };

    /*
    * Method to get the assessment scores
    * Parameters:
    * + course_id: The id of the course to get scores for
    * + set_name: The name of the class set to get scores for
    * + callback: The method to handle the response coming from the server
    * */
    static getEnterScoreData = (course_id, set_name, callback) => {
        $.ajax({
            method: "GET",
            url: Api.DEV_BASE_URL + "/v1/courses/get_assessments",
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            data: {course_id: course_id, set_name: set_name},
            success: function (result) {
                callback(result.assessments);
            },
            error: function (e) {
                Utils.displayMessage('error', 'Failed', "Course's assessments could not be loaded");
            }
        })
    };

    /*
    * Method to get the assessment definitions of a course
    * Parameters:
    * + course_id: The id of the course to get scores for
    * + set_name: The name of the class set to get assessment definitions for
    * + callback: The method to handle the response coming from the server
    * */
    static getAssessmentDefinitions = (course_id,set_name, callback) => {
        $.ajax({
            method: "GET",
            url: Api.DEV_BASE_URL + "/v1/assessments",
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            data: {course_id: course_id, set_name: set_name},
            success: function (result) {
                callback(result.assessments);
            },
            error: function (e) {
                Utils.displayMessage('error', 'Failed', "Course's assessments could not be loaded");
            }
        })
    };

    /*
    * Method to assessment scores for students
    * Parameters:
    * + student_results: The scores of the different students
    * + meta: The details of the assessment scores is being entered for
    * + callback: The method to handle the response coming from the server
    * */
    static enterStudentsScores = (student_results, meta,callback) => {
        $.ajax({
            method: "POST",
            url: Api.DEV_BASE_URL + "/v1/teachers/enter_scores",
            dataType: "json",
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            data: {scores: student_results, user_id: cookies.load('currentUserId'), meta: meta},
            success: function (student_results) {
                Utils.displayMessage('success', 'Successful', "Students' score successfully entered");
                callback();
            },
            error: function (e) {
                Utils.displayMessage('error', 'Failed', "Students' scores could not be saved");
            }
        });
    };

    /*
    * Method to take attendance for a course
    * Parameters:
    * + students: The list of students to mark attendance for
    * + courseId: The id of the course to take attendance for students
    * + callback: The method to handle the response coming from the server
    * */
    static takeAttendance = (students,courseId, callback) => {
        $.ajax({
            method: "POST",
            url: Api.DEV_BASE_URL + "/v1/teachers/enter_class_attendance",
            dataType: "json",
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            data: {class_attendance: students, course_id: courseId},
            success: function (result) {
                callback(result);
            },
            error: function (e) {
                Utils.displayMessage('error', 'Failed', e.statusText);
            }
        });
    };

    /*
    * Method to delete an assessment for a course
    * Parameters:
    * + data: The assessment to delete
    * + callback: The method to handle the response coming from the server
    * */
    static deleteAssessment = (data, callback) => {
        let id = data._id.$oid;
        let course_id = data.course_id.$oid;
        $.ajax({
            method: "DELETE",
            url: Api.DEV_BASE_URL + "/v1/assessments/"+id,
            dataType: "json",
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            data: {course_id: course_id},
            success: function (result) {
                callback(result);
            },
            error: function (e) {
                Utils.displayMessage('error', 'Failed', e.statusText);
            }
        });
    };

    /*
    * Method to take get the enrolled students for a course
    * Parameters:
    * + course_id: The id of the course to get enrolled students
    * + callback: The method to handle the response coming from the server
    * */
    static getCurrentStudents = (course_id, callback) => {
        $.ajax({
            method: "GET",
            url: Api.DEV_BASE_URL + "/v1/courses/current_semester_students",
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            data: {course_id: course_id},
            success: function (result) {
                callback(result);
            },
            error: function (e) {
                Utils.displayMessage('error', 'Failed', "Course current students could not be loaded");
            }
        })
    };

    /*
    * Method to take get the assessment definitions for a course
    * Parameters:
    * + course_id: The id of the course to get assessment definitions
    * + callback: The method to handle the response coming from the server
    * */
    static assessmentDefinitions = (course_id, callback) => {
        $.ajax({
            method: "GET",
            url: Api.DEV_BASE_URL + "/v1/courses/get_assessment_definitions",
            headers: {
                "Authorization": "token " + cookies.load("token"),
                "UserProfile": cookies.load("profile"),
                "UserKey": cookies.load('User-Key')
            },
            data: {course_id: course_id},
            success: function (result) {
                callback(result);
            },
            error: function (e) {
                Utils.displayMessage('error', 'Failed', "Course current assessments could not be loaded");
            }
        })
    };
}
