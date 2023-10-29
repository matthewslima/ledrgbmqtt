function enviarParaMQTT() {
    var redValue = document.getElementById("redInput").value;
    var greenValue = document.getElementById("greenInput").value;
    var blueValue = document.getElementById("blueInput").value;

    var client = new Paho.MQTT.Client("mqtt_server", 9001, "client_id");

    client.onConnectionLost = function(responseObject) {
        if (responseObject.errorCode !== 0) {
            console.log("Conexão perdida: " + responseObject.errorMessage);
        }
    };

    client.connect({
        onSuccess: function() {
            console.log("Conectado ao servidor MQTT");
            var message = new Paho.MQTT.Message("RGB: " + redValue + "," + greenValue + "," + blueValue);
            message.destinationName = "topic";
            client.send(message);
        },
        onFailure: function(err) {
            console.log("Erro de conexão: " + err.errorMessage);
        }
    });
}
