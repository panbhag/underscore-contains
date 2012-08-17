_.mixin({

//returns true if source has all the properties(nested) of target.
    contains: function(source, target) {
        //console.log('arguments',source,target);
        var keys = _.keys(target);
        //console.log("keys",keys)
        var noMatch = false; // assume it is a match
        noMatch = _.any(keys, function(key) {    //loop through all the keys and return a true, if any no match found

            var source_value = source[key];
            var target_value = target[key];
            //console.log('values',source_value,target_value);

            if (_.isObject(target_value)) {
                var result = _.contains(source_value, target_value);
                //console.log(result,"result");
                return !result;
          }
            else //if (source_value != target_value)
            {    //console.log('found no match');
                //return true;
                return (source_value != target_value)
            }
        });
        //console.log("nomatch",noMatch);

        return !noMatch;



    }

});
