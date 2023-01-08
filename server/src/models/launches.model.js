const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer ISI',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customer: ['NASA', 'MK Web'],
    upcoming: true,
    success: true,
}

const launches = new Map()
let latestFlightNumber = 100
launches.set(launch.flightNumber, launch)
function getAllLaunches() {
    return Array.from(launches.values())
}

function addNewLaunch(launch) {
    latestFlightNumber++
    launches.set(latestFlightNumber, Object.assign(launch, {
        customers: ['NASA', 'MK Web'],
        upcoming: true,
        success: true,
        flightNumber: latestFlightNumber
    }))
}
module.exports = {
    getAllLaunches,
    addNewLaunch,
}