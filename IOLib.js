//A library dedicated to Input/Output and files

var Logger = require("pavlism-logger");
var log = new Logger('IO.js', Logger.level.error);

IO = {};

/**
 * This will creat a blob object from a file string
 * 
 * @param fileString {string} The file as a string
 * @param fileType {string} The file type (.txt, .xls etc.)
 * @return {Object} Returns a file blob
 */
IO.getBlobFromFileString (fileString, fileType) {
	var binaryObject = fileString;
	var binary = atob(binaryObject.split(',')[1]);
	var array = [];
	for (var i = 0; i < binary.length; i++) {
		array.push(binary.charCodeAt(i));
	}
	var blob = new Blob([new Uint8Array(array)], {type: fileType});
	return blob;

};
/**
 * This will call the sendEmail function on the server and then fire the callback and pass in the an errors.
 * 
 * @param to {string} The email address to send the e-mail to
 * @param from {string} The email address to send the e-mail from (not working)
 * @param subject {string} The subject of the e-mail
 * @param text {string} The text of the e-mail
 * @param callback {function} The callback
 */

IO.sendEmail (to, from, subject, text, callback) {
	Meteor.call('sendEmail', to, from, subject, text, function (error) {
		if (!Lib.JS.isUndefined(callback)) {
			callback(error);
		}
	});
};

module.exports = IO;

























if (typeof IOLib === 'undefined') {
    var IOLib = {};
    
    if (typeof Lib === 'undefined') {
            Lib = {};
        }

    var creation = function (Lib) {
        var log = new LoggerServer('Lib.IO.js', CLL.error);

		Lib.IO = {};

		/**
		 * This will creat a blob object from a file string
		 * 
		 * @param fileString {string} The file as a string
		 * @param fileType {string} The file type (.txt, .xls etc.)
		 * @return {Object} Returns a file blob
		 */
		Lib.IO.getBlobFromFileString = function (fileString, fileType) {
			var binaryObject = fileString;
			var binary = atob(binaryObject.split(',')[1]);
			var array = [];
			for (var i = 0; i < binary.length; i++) {
				array.push(binary.charCodeAt(i));
			}
			var blob = new Blob([new Uint8Array(array)], {type: fileType});
			return blob;

		};
		/**
		 * This will call the sendEmail function on the server and then fire the callback and pass in the an errors.
		 * 
		 * @param to {string} The email address to send the e-mail to
		 * @param from {string} The email address to send the e-mail from (not working)
		 * @param subject {string} The subject of the e-mail
		 * @param text {string} The text of the e-mail
		 * @param callback {function} The callback
		 */

		Lib.IO.sendEmail = function (to, from, subject, text, callback) {
			Meteor.call('sendEmail', to, from, subject, text, function (error) {
				if (!Lib.JS.isUndefined(callback)) {
					callback(error);
				}
			});
		};
       
    };
    creation.call(IOLib, Lib);
}