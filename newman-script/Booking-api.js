const newman = require("newman")

newman.run({
    collection: "json-collection/Booking-API.postman_collection.json",
    environment: "json-env/Booking-API.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
