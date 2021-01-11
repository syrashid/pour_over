// SCSS Import (For Bundling Purposes)
import "../css/index.scss";

// DOM Element Import
import { elements } from "./views/stepView";

// Class Imports
import StepController from "./step_controller";
import Step from "./models/Step";
import Command from "./models/Command";
import Form from "./models/Form";
import Timer from "./models/Timer";

{
  const stepCtrl = new StepController();

  elements.next.addEventListener("click", () => stepCtrl.nextStep());
  elements.prev.addEventListener("click", () => stepCtrl.prevStep());

  stepCtrl.push(
    new Command(
      "Good morning love, let's make coffee together!",
      10,
      "Animation Placeholder"
    )
  );

  stepCtrl.push(new Form("How should we do this?", 0, null));

  stepCtrl.push(
    new Command("Let's get the water boiling", 0, "Animation Placeholder")
  );

  stepCtrl.push(
    new Command("Now let's set the grounds", 0, "Animation Placeholder")
  );

  stepCtrl.push(
    new Timer(
      "Let's pour a little water for the bloom",
      35,
      "Animation Placeholder"
    )
  );

  stepCtrl.push(
    new Timer(
      "Now let's pour continuously to steep",
      150,
      "Animation Placeholder"
    )
  );

  stepCtrl.push(
    new Command("And for the last bit let's give it a slight stir", 0, "Animation Placeholder")
  );

  stepCtrl.push(
    new Command("Enjoy love, see you tomorrow morning", 0, "Animation Placeholder")
  );

  stepCtrl.start();
}
