type Words = {
    [key:string]: string
}

class Dict {
    private words:Words
    constructor(){
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term]===undefined){
            this.words[word.term] = word.def;
        }
    }

    def(term:string){ //조회메서드 - 의미 찾고싶은 단어를 string으로 검색
        return this.words[term] //string으로 찾은 값의 value를 리턴
    }
    //삭제
    delelte(word:Word){
        if(this.words[word.term] !==undefined){
            delete this.words[word.term]
        }
    }
    //단어업데이트
    update(word:Word){
        if(this.words[word.term] !== undefined){
        this.words[word.term] = word.def
        }
    }
    //딕셔너리의 단어를 모두 보여줌
    showAll(){
        let dictArr = Object.keys(this.words)
       return dictArr.map((Alldict)=>{return console.log(Alldict)})
    }
    //단어들의 총 수 
    count(){
        let dictArr = Object.keys(this.words)
        return console.log(dictArr.length)
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