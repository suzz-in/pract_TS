//추상 클래스는 상속받는 다른 클래스가 가져야 할 property랑 메소드를 명시 할 수 있도록 도와줌
abstract class User {
    constructor (
        //protexted는 추상 클래스로부터 상속받은 클래스들이 property에 접근하도록 해줌
        //private이면 접근할 수 없음
        protected firstName : string,
        protected lastName : string,
    ){}
    abstract sayHi(name: string): string
    abstract fullName() : string
}

//추상 클래스는 그것으로부터 인스턴스를 만드는것 허용하지않음
//new User()<- 불가

//왜 추상클래스를 만드는가?
// 표준화된 property와 메소드를 갖도록 해주는 청사진을 만들기 위해 추상클래스를 사용함
//인터페이스는 가벼움. 인터페이스는 컴파일하면 js로 바뀌지 않고 사라짐
class Player extends User {
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string){
        return `hellow ${name}, my name is ${this.fullName()}`
    }
}