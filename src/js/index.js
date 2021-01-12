// SCSS Import (For Bundling Purposes)
import "../css/index.scss";

// DOM Element Import
import { elements } from "./views/stepView";

// Function Imports
import { initMusicPlayer } from "./functions/initMusicPlayer";

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
      "Good morning love, let's make coffee together",
      10,
      `<object data="./assets/morning.svg" type="image/svg+xml" class="animation-morning"></object>`
    )
  );

  const formObj = new Form("How should we do this?", 0, null);
  stepCtrl.push(formObj);

  stepCtrl.push(
    new Command(
      "Let's get the water boiling",
      0,
      `<object data="./assets/boil.svg" type="image/svg+xml" class="animation-boil"></object>`
    )
  );

  stepCtrl.push(
    new Command(
      "Now let's set the grounds",
      0,
      `<object data="./assets/grind.svg" type="image/svg+xml" class="animation-grind"></object>`
    )
  );

  stepCtrl.push(
    new Timer(
      "Let's pour a little water for the bloom",
      35,
      `<object data="./assets/bloom.svg" type="image/svg+xml" class="animation-bloom"></object>`
    )
  );

  stepCtrl.push(
    new Timer(
      "Now let's pour continuously to steep",
      120,
      `<object data="./assets/pour.svg" type="image/svg+xml" class="animation-pour"></object>`
    )
  );

  stepCtrl.push(
    new Timer(
      "And for the last bit let's give it a slight stir and wait",
      30,
      `<object data="./assets/stir.svg" type="image/svg+xml" class="animation-stir"></object>`
    )
  );

  stepCtrl.push(
    new Command(
      "Enjoy love, see you tomorrow morning",
      0,
      `<object data="./assets/love.svg" type="image/svg+xml" class="animation-love"></object>`
    )
  );

  // const formObj = new Form("How should we do this?", 0, null);
  // stepCtrl.push(formObj);


  stepCtrl.start();
  initMusicPlayer(formObj);
}
