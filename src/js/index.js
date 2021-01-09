// SCSS Import
import "../css/index.scss";
import Step from "./models/Step";


// Class Imports
import StepController from './step_controller';

{
  const stepCtrl = new StepController();



  stepCtrl.push(
    new Step(
      "Good morning love, let's make some coffee together!",
      10,
      'www.example.com'
    )
  );

  stepCtrl.start();
}
