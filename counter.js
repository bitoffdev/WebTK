var counter = {
    words: function(string){
        return string.match(/\S+/g).length;
    },
    characters: function(string){
        return string.length;
    },
    toString: function(string){
        return "Words: " + counter.words(string) + ", Characters: " + counter.characters(string);
    }
}
