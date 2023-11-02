
// Configurar o cliente MQTT
    var clientId = "cliente-web";
    var serverUrl = "tcp://broker.mqtt.cool:1883"; // Substitua pelo seu servidor MQTT
    var client = new Paho.MQTT.Client(serverUrl, clientId);
// Conectar ao servidor MQTT
    client.connect({
        onSuccess: onConnect,
        onFailure: onFailure
});
// Callback de conexão bem-sucedida
    function onConnect() {
        console.log("Conectado ao servidor MQTT.");
}
// Callback de falha na conexão
    function onFailure(errorMessage) {
        console.log("Falha na conexão: " + errorMessage.errorMessage);
}
// Enviar mensagem MQTT
    document.getElementById("enviar").addEventListener("click", function() {
        var topic = "ifce.info"; // Substitua pelo tópico desejado
        var message = "Mensagem MQTT de exemplo";
        var messageObj = new Paho.MQTT.Message(message);
        
        messageObj.destinationName = topic;
        client.send(messageObj);
        console.log("Mensagem MQTT enviada: " + message);
        });
