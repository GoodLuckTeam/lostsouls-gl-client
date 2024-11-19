PlayerEvents.loggedIn(event => {
    const player = event.player;
    const data = player.persistentData;

    if(data.join == null){
        event.server.scheduleInTicks(20, callback => {
            player.tell("Добро пожаловать в этот неизведанный мир §6Lost §dSouls! §rУдачи Исследователь! от Стефа...");

                })
        data.join = {join:true}
    }
})