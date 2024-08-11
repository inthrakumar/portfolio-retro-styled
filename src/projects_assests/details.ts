import ProjectsArray from './projectsarray';
import { arraytypes } from './projectsarray';
const map: Map<string, arraytypes> = new Map();
map.set('CelestialTrust', ProjectsArray[0]);
map.set('NewsBuzz', ProjectsArray[1]);
map.set('RetroStylePortfolio', ProjectsArray[2]);
export default map;
