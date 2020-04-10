function isEquivalent(a,b){
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length){
        return false;
    }
    for(var i=0; i<aProps.length; i++){
        var propName = aProps[i];

        if(a[propName] != b[propName]){
            return false;
        }
    }
    return true;
}

isEquivalent({'hi':12},{'h1':1+2}); //true를 반환한다