type Words = {
    //제한된 양의 property 혹은 key를 가지는 타입을 정의해주는 방법
    [key:string]: string
}

class Dict {
    //constructor 에서 직접 초기화 되지 않는 property
    //word를 initializer 없이 선언해준뒤 -> constructor에서 수동으로 초기화
    private words:Words
    constructor(){
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term]===undefined){
            this.words[word.term] = word.def;
        }
    }

    def(term:string){
        return this.words[term]
    }
}

class Word {
    constructor(
        public term: string,
        public def: string,
    ) {
    }
}

const kimchi = new Word("Kimchi", "한국의 음식")

const dict = new Dict()
dict.add(kimchi)
dict.def("kimchi")