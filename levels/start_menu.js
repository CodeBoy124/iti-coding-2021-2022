function start_menu(){
    current_level_name = "start menu";
    
    // insert code here
    scene.add.ui(new Vector2(0, 0), new Vector2(150, 100), {
        type: "text",
        color: "white",
        text: "Welcome",
        size: 30,
        click(){
            levelPassed(0);
        }
    });
}