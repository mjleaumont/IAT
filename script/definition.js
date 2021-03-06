define(['timeAPI', 'https://cdn.jsdelivr.net/gh/mjleaumont/IAT/script/fulliat.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Mentally Ill', //Will appear in the data.
			title : {
				media : {word : 'Mentally Ill'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word : 'Depression'}, 
    			{word : 'Schizophrenia'}, 
    			{word : 'Bipolar Disorder'}, 
    			{word : 'Obsessive Compulsive Disorder'}, 
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Physically Ill', //Will appear in the data.
			title : {
				media : {word : 'Physically Ill'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word : 'Diabetes'}, 
    			{word : 'Multiple Sclerosis'}, 
    			{word : 'Cerebral Palsy'}, 
    			{word : 'Appendicitis'}, 
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		}
	});
});
