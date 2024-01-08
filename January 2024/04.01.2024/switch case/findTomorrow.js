const ezeYomMahar = () => {
    let today = new Date();
    const tomorrow = today.getDay() + 1;
    let inWords;
    switch (tomorrow) {
      case 0:
        inWords = "ראשון";
        break;
      case 1:
        inWords = "שני";
        break;
      case 2:
        inWords = "שלישי";
        break;
      case 3:
        inWords = "רביעי";
        break;
      case 4:
        inWords = "חמישי";
        break;
      case 5:
        inWords = "שישי";
        break;
      case 6:
        inWords = "שבת";
        break;
      default:
        break;
    }
    return inWords 
  };
  
  console.log(`מחר יום ${ezeYomMahar()}`);