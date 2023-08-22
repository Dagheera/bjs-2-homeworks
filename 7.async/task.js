class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time == undefined || callback == undefined) {
            throw new Error("Отсутствуют обязательные аргументы");
        } else if (this.alarmCollection.find(item => item.time == time)) {
            console.warn("Уже присутствует звонок на это же время");
        }
        this.alarmCollection.push({callback, time, canCall: true});
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time!== time);      
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString(
            'ru-RU',
            {
                hour: 'numeric',
                minute: 'numeric'
            });
    }

    start() {
        if (this.intervalId != null) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if (alarm.canCall && alarm.time === this.getCurrentFormattedTime()) {
                    alarm.callback();
                    alarm.canCall = false;
                }
            });
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}