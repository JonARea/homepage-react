import { homepage } from '../components/home'
import { writings } from '../components/writings'
import { projects } from '../components/projects'

import weather from '../containers/weather'
import quote_generator from '../containers/quote_generator'


export default function () {
  return {
    homepage,
    writings,
    projects,
    quote_generator,
    weather
  }
}
