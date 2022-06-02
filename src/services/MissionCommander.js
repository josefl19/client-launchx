import http from "../http-common";

class CommanderService {
    getAll() {
        return http.get("/commander")
    }
    get(id) {
        return http.get(`/commander/${id}`);
    }
    create(data) {
        return http.post("/commander", data);
    }
    update(id, data) {
        return http.put(`/commander/${id}`, data);
    }
    delete(id) {
        return http.delete(`/commander/${id}`);
    }
}

export default new CommanderService();