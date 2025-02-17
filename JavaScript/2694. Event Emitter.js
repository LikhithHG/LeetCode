class EventEmitter {
    constructor() {
        this.events = {};
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        this.events[eventName] = this.events[eventName] ?? [];
        this.events[eventName].push(callback);
        
        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(func => func !== callback);
                //To avoid memory leaks adding a cleanup condition
                if (this.events[eventName].length === 0) 
                {
                    delete this.events[eventName]
                }
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!(eventName in this.events)) 
            return [];
        return this.events[eventName].map(f => f(...args));
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */