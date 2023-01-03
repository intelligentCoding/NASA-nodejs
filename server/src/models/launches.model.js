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
launches.set(launch.flightNumber, launch)
function getAllLaunches() {
    return Array.from(launches.values())
}
module.exports = {
    getAllLaunches,
}