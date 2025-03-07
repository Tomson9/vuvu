import { reactive } from "vue";
import { seedData } from "./seed"

 const store = {
    state: {
        data: reactive(seedData)
    },
    getActiveDay () {
        return this.state.data.find((day) => day.active);
    },
    setActiveDay (dayId) {        
        this.state.data.map((dayObj) => {
         dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
        });
    },
    //Methode de sumission pour ajouter un event
    submitEvent(eventDetails) {        
        const activeDay = this.getActiveDay();
        activeDay.events.push({ details: eventDetails, edit: false }
        )
        
    },
        
        
}

export default store;