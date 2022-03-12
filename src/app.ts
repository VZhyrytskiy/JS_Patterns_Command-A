import { Manager, Command, AdvertizeCommand, CodeCommand, TestCommand, MacroCommand, SuperManager, MarketingExpert, SoftwareEngineer, SoftwareTestingEngineer } from './task1';
import { TV, Volume, Pult, SuperPult, TVCommand, VolumeCommand } from './task2';

/**
 * OLD
 */
{
    const softwareEngineer = new SoftwareEngineer();
    const softwareTestingEngineer = new SoftwareTestingEngineer();
    const marketingExpert = new MarketingExpert();

    const superManager = new SuperManager(softwareEngineer, softwareTestingEngineer, marketingExpert);
    // superManager.startProject();
    // superManager.stopAdvertizing();
}

/**
 * NEW
 */
{
    const softwareEngineer1 = new SoftwareEngineer();
    const softwareEngineer2 = new SoftwareEngineer();
    const softwareTestingEngineer = new SoftwareTestingEngineer();
    const marketingExpert = new MarketingExpert();

    const commands: Array<Command> = [
        new CodeCommand(softwareEngineer1),
        new CodeCommand(softwareEngineer2),
        new TestCommand(softwareTestingEngineer),
        new AdvertizeCommand(marketingExpert)
    ];

    // case 1
    const manager = new Manager();
    manager.setCommand(new MacroCommand(commands));
    manager.start();
    manager.stop();


    // case 2
    const codeCommand1 = new CodeCommand(softwareEngineer1);
    const codeCommand2 = new CodeCommand(softwareEngineer2);
    manager.setCommand(codeCommand1);
    manager.start();
    manager.stop();
    manager.setCommand(codeCommand2);
    manager.start();
    manager.stop();


}

/**
 * OLD
 */
{
    const tv = new TV();
    const volume = new Volume();
    const pult = new SuperPult(tv, volume);

    pult.switchOnTV();

    pult.raiseVolume();
    pult.raiseVolume();
    pult.raiseVolume();

    pult.pressUndoButton();
    pult.pressUndoButton();
    pult.pressUndoButton();
    pult.pressUndoButton();
}

/**
 * NEW
 */
{
    const tv = new TV();
    const volume = new Volume();
    const pult = new Pult();

    pult.setCommand(0, new TVCommand(tv));
    pult.setCommand(1, new VolumeCommand(volume));

    pult.pressButton(0);    // включить телевизор
    pult.pressButton(1);    // увеличить громкость
    pult.pressButton(1);    // увеличить громкость
    pult.pressButton(1);    // увеличить громкость

    pult.pressUndoButton(); // уменьшить громкость
    pult.pressUndoButton(); // уменьшить громкость
    pult.pressUndoButton(); // уменьшить громкость
    pult.pressUndoButton(); // выключить телевизор
}

