interface LocalStorageAPI<T> {
    [key: string] : T
}

class LocalStorage<T> {
    private storage : LocalStorageAPI<T> = {}
    setItem(key:string, value: T){
        if(!this.storage.hasOwnProperty(key)){
             this.storage[key] = value;
        }
    }
    getItem(key:string):T{
        return this.storage[key]
    }
    clearItem(key:string){
        delete this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}
interface GeolocationAPI {
    successFn(location:string):{}
    error(location:string)?:{}
    options()?:{}
}
//overloading 오버로딩 : 매개변수의 개수는 동일하게, type은 다르게 정의해서 사용하는 방법(ts는 함수명과 매개변수의 개수가 같아야함)
//매개변수의 type만 다르고 동작은 동일할 떄 코드를 줄이고자 사용
class GEOlocation{
    private location : GeolocationAPI
    getCurrentPosition(successFn(location:string):{}){
    }
    watchPostition(){}
    clearWatch()
}
// geolocation.getCurrentPosition(successFn);//현재위치 파악, 
// geolocation.getCurrentPosition(successFn, errorFn);
// geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
// geolocation.watchPosition(success);
// geolocation.watchPosition(success, error);
// geolocation.watchPosition(success, error, options);
// geolocation.clearWatch(id);