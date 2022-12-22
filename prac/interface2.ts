//추상 클래스는 상속받는 다른 클래스가 가져야 할 property랑 메소드를 명시 할 수 있도록 도와줌
interface User {
    firstName: string,
    lastName: string,
    sayHi(name: string): string
    fullName() : string
}
interface Human {
    health: number
}

//추상 클래스는 그것으로부터 인스턴스를 만드는것 허용하지않음
//new User()<- 불가

//왜 추상클래스를 만드는가?
// 표준화된 property와 메소드를 갖도록 해주는 청사진을 만들기 위해 추상클래스를 사용함
//인터페이스는 가벼움. 인터페이스는 컴파일하면 js로 바뀌지 않고 사라짐
//추상클래스는 자바스크립트에서 일반적인 클래스로 바뀜
class Player implements User, Human {
    //implements 사용하면 코드가 가벼워짐 - 컴파일 안되니까.. js는 없는 거라서
    constructor(
        // 인터페이스 상속할 때에는 property를 private로 만들지못함
        public firstName: string,
        public lastName : string,
        public health : number,
        ) {}
        getFullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
        sayHi(name: string){
            return `hellow ${name}, my name is ${this.fullName()}`
        }
}


//인터페이스를 타입으로 사용가능
//클래스를 타입으로 쓸 수 있고, 인터페이스도 타입으로 쓸 수 있음
function makeUser(user: User) ={
    return "hi"
} 

makeUser({
    firstName: "nico",
    lastName: "las",
    fullName: ()=> "xx",
    sayHi: (name) => "string"
}