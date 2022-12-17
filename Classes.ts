//typescript로 객체지향 구현

//추상클래스 구현
//추상클래스는 다른 클래스가 상속받을 수 있는 클래스
//추상클래스는 직접 새로운 인스턴스를 만들 수 없음 (new User시 동작 x)

//추상메소드를 만들려면 메소드를 클래스 안에서 구현하지 않으면 된다
//추상메소드는 추상클래스를 상속받는 모든 것들이 구현해야하는 메소드를 의미한다.



abstract class User{
    constructor(
        //this.firstName = firstName js에서
        //private은 자바스크립트에서 보이지않음 컴파일되면서 없어짐
        //proporty를 private으로 만든다면, 클래스 상속했더라도 접근할 수 없음
        //이클래스는 추상 클래스여서 인스턴스화 할 수 없음
        //다른 자식클래스에서 사용되길 바라면 private 말고 protect 사용할 것 
        private firstName : string,
        private lastName: string,
        public nickname: string,
    ){}
    // 추상클래스 메소드, 메소드의 call signature만 적어
    abstract getNickName():void
    getFullName(){
        return `${this.firstName }${this.lastName}`
    }
}
//player가 user을 상속함
class Player extends User{
}

const nico = new Player("nico", "las", "니꼬")
//palyer가 user을 상속받았기때문에 getFullName 메소드 사용가능함
nico.getFullName()
