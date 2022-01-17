class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  set isCheckedOut(checked) {
    this._isCheckedOut = checked;
  }
  get ratings(){
    return this._ratings;
  }
  
   toggleCheckOutStatus(){
     this._isCheckedOut = !this._isCheckedOut;
   }
  
   getAverageRating(){
     let ratingSum = this._ratings.reduce((sum, rating) => sum + rating, 0);
  
     return (ratingSum / this._ratings.length);
   }
  
    addRating(rating){
      if(rating >= 1 && rating <= 5) {
        this._ratings.push(rating);
      } else {console.log("Rating isn't in the 1 to 5 scale that we use!");}
    }
  }
  
  class Book extends Media {
    constructor(author, title,  pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4); 
  historyOfEverything.addRating(4); 
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());