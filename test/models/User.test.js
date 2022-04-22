const User = require('./../../app/models/User')

describe("Prueba de unidad para clase User", () => {
    test('Creando un objeto de tipo User', () => {
        const user = new User(1,"luan","Luis Diaz","Bio","dateCreated","lastUpdated")

        expect(user.id).toBe(1)
        expect(user.username).toBe("luan")
        expect(user.name).toBe("Luis Diaz")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('Añadiendo getters', () => {
        const user = new User(1,"luan","Luis Diaz","Bio","dateCreated","lastUpdated")
        expect(user.getUsername).toBe("luan")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });
})