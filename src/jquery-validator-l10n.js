/**
 * jQuery validator l10n
 * @version 0.1
 * @author Ennosol Technology Co. Ltd.
 */
$.fn.convertLaraRulesToMessages = function(options) {

    // All possible human readable error messages in JSON format
    var errorMessages = options.errorMessages;

    // Converter object
    var converter = {

        // Parse broken rules to rule name and parameters
        parseRules : function (brokenRules) {

            var rules = [],
                rule;

            $.each(brokenRules.split("|"), function (idx, value) {

                rule = value.split(":");
                rules.push({
                    method: rule[0],
                    params: rule[1] ? rule[1].split(",") : [],
                    original: value
                });

            });
            return rules;
        },

        // Get human readable error messages from broken rules
        convert : function (options) {

            // Necessary options
            var humanReadableErrorMessages = [],
                label = options.label,
                brokenRules = options.brokenRules,
                callback = options.callback,
                value = options.value,
                rules = converter.parseRules(brokenRules);

            // Iterate all broken rules
            $.each(rules, function (index, rule) {

                // If there is error message for this rule
                if (typeof errorMessages[rule.method] !== "undefined") {

                    // If the error message type is string
                    if (typeof errorMessages[rule.method] === "string") {
                        message = errorMessages[rule.method].replace(':attribute', label);
                    } else {
                        // Laravel's rules has a special error message object type for four data type,
                        // in this case, we have to established the type of input value.
                        if ($.isNumeric(value)) {
                            var message = errorMessages[rule.method].numeric.replace(':attribute', label);
                        } else if ($.isArray(value)) {
                            var message = errorMessages[rule.method].array.replace(':attribute', label);
                        } else if (jQuery.type(value) === "string") {
                            var message = errorMessages[rule.method].string.replace(':attribute', label);
                        } else {
                            return true; // Unknown type, continue the loop
                        }
                    }

                    // If the rule has custom method, it call this
                    if (typeof converter[rule.method] === "function") {
                        message = converter[rule.method](message, rule.params);
                        // If there is min one parameter, it try replace this
                    } else if (rule.params.length) {
                        message = message.replace(':' + rule.method, rule.params[0]);
                    }

                    // Push to array the converted error message
                    humanReadableErrorMessages.push(message);

                }
            });

            // Call the given callback function
            // The user can customize the display of the readable error messages by this callback function
            callback(humanReadableErrorMessages);
        },

        //--------------------------------------------------------------------------------------------------------------
        //  Custom converters
        //--------------------------------------------------------------------------------------------------------------

        between : function (message, params) {

            message.replace(":min", params[0]);
            message.replace(":max", params[1]);
            return message;

        }

    };

    // Convert rules to messages
    converter.convert(options);

    // Return with the original object
    return this;
};