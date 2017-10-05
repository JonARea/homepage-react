import { homepage } from '../components/home'
import { projects } from '../components/projects'
import { resume } from '../components/resume'

import weather from '../containers/weather'
import quote_generator from '../containers/quote_generator'


export default function () {
  return {
    homepage,
    resume,
    projects,
    quote_generator,
    weather
  }
}
