/* eslint-disable prettier/prettier */
// 1. Importando la libreria de mongoose
import * as mongoose from 'mongoose';
// 2. Destructuracion para obtener Squema
import { Schema } from 'mongoose';

// 3. Creando Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model('project', ProjectSchema);