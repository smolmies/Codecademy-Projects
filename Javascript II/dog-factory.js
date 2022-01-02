let dog = {
    _name: '',
    _breed: '',
    _weight: '',
  
    get name(){
      return this._name;
    },
    set name(newName){
      if(typeof newName === 'string'){
        this._name = newName;}
    },
    get breed(){
      return this._breed;
    },
    set breed(newBreed){
      if(typeof newBreed === 'string'){
        this._breed = newBreed;}
    },
    get weight(){
      return this._weight;
    },
    set weight(newWeight){
      if(typeof newWeight === 'number'){
        this._weight = newWeight;}
    },
    bark(){
      return 'ruff! ruff!';
    },
    eatTooManyTreats(){
     this._weight++;
    }
  };
  
  
  function dogFactory(name, breed, weight){
    if(typeof name === 'string'){
      dog._name = name;
    }
    if(typeof breed === 'string'){
      dog._breed = breed;
    }
    if(typeof weight === 'number'){
      dog._weight = weight;
    }
  return dog; 
  }