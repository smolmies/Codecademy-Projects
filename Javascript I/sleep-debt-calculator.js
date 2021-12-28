const getSleepHours = day => {
    switch (day){
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 4;
        break;
      case 'thursday':
        return 9;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 5;
        break;
      case 'sunday':
        return 10;
        break;
      default:
        return 'error';
        break;
    }
  };
  
  const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') 
    + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  
  const getIdealSleepHours = (idealHours) => idealHours * 7;
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    let sleepOverlap = 0;
  
    if (actualSleepHours === idealSleepHours){
      console.log("User got the perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours){
      sleepOverlap = actualSleepHours - idealSleepHours;
      console.log(`User slept ${sleepOverlap} hour(s) too much.`);
    } else {
      sleepOverlap = idealSleepHours - actualSleepHours;
      console.log(`User slept ${sleepOverlap} hour(s) too little.`);
    }
  };
  
  calculateSleepDebt();