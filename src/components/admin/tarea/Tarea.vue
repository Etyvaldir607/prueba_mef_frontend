<template>
  <section>
    <h3 class="primary--text"><v-icon color="primary">business</v-icon> {{ !$util.isRol('SUPERADMIN') ? 'Tarea' : $t('task.title') }}</h3>
    <v-card>
      <v-card-text>
        <crud-table
          :headers="headers"
          :url="url"

          :graphql="graphql"
          :widthModal="800"
          v-if="$util.isRol('SUPERADMIN')"
        >
          <template slot="buttons">
            <v-tooltip bottom v-if="$store.state.permissions['tareas:create']">
              <v-btn color="primary"
                @click.native.stop="openModal()"
                slot="activator">
                <v-icon>add</v-icon> {{$t('common.add') }}
              </v-btn>
              <span>{{$t('task.add')}}</span>
            </v-tooltip>
          </template>

          <template slot="form">
            <v-card-title class="headline">
              <v-flex xs9>
                {{ form.id ? $t('task.crud.editEnt') :  $t('task.crud.addEnt') }}
              </v-flex>
              <v-flex xs2 text-md-right>
                <v-chip label color="success" text-color="white" v-if="form.estado == 'ACTIVO'">
                  {{ form.estado }}
                </v-chip>
                <v-chip label color="warning" text-color="white" v-if="form.estado == 'INACTIVO'">
                  {{ form.estado }}
                </v-chip>
              </v-flex>
              <v-flex xs1 text-md-right>
                <v-btn icon @click.native="$store.commit('closeModal')">
                  <v-icon>close</v-icon>
                </v-btn>
              </v-flex>
            </v-card-title>
            <v-form
              @submit.prevent="save"
              v-model="valid"
              ref="form"
              lazy-validation
              >
              <v-card-text class="pt-0">
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs8>
                      <v-text-field
                        name="nombre"
                        :label="$t('task.crud.name')"
                        id="nombre"
                        v-model="form.nombre"
                        autofocus
                        maxlength="150"
                        :rules="$validate(['required'])"
                        required
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs4>
                      <v-text-field
                        name="estado"
                        :label="$t('task.crud.status')"
                        id="estado"
                        v-model="form.estado"
                        maxlength="20"
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs6>
                      <v-text-field
                        name="fecha"
                        :label="$t('task.crud.dateDo')"
                        id="fecha"
                        v-model="form.fecha"
                        
                        
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs6>
                      <v-text-field
                        name="hora"
                        :label="$t('task.crud.timeDo')"
                        id="hora"
                        v-model="form.hora"
                        
                        
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs12>
                      <v-text-field
                        name="descripcion"
                        :label="$t('task.crud.description')"
                        id="descripcion"
                        v-model="form.descripcion"
                        maxlength="500"
                        :counter="500"
                        :rules="$validate(['required'])"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
                <log-datos :data="logDatos" v-if="logDatos"></log-datos>
              </v-card-text>
              <v-card-actions>
                <small class="error--text text-required">* Los campos son obligatorios</small>
                <v-spacer></v-spacer>
                <v-btn
                  @click.native="$store.commit('closeModal');">
                  <v-icon>cancel</v-icon> {{$t('common.cancel') }}
                </v-btn>
                <v-btn
                  color="primary"
                  type="submit"
                  :disabled="!valid">
                  <v-icon>check</v-icon> {{$t('common.save') }}
                </v-btn>
              </v-card-actions>
            </v-form>
          </template>

          <template slot="items" slot-scope="items">
            <td>{{ items.item.nombre }}</td>
            <td>{{ items.item.fecha }}</td>
            <td>{{ items.item.hora }}</td>
            <td>
              <v-chip label color="success" text-color="white" v-if="items.item.estado == 'ACTIVO'">
                {{ items.item.estado }}
              </v-chip>
              <v-chip label color="warning" text-color="white" v-if="items.item.estado == 'INACTIVO'">
                {{ items.item.estado }}
              </v-chip>
            </td>
            <td class="nowrap">
              <v-tooltip bottom v-if="$store.state.permissions['tareas:read']">
                <v-btn
                  icon
                  slot="activator"
                  @click.native="editItem(items.item.id, 'tarea', dataGraphql)">
                  <v-icon>show</v-icon>
                </v-btn>
                <span>Ver registro</span>
              </v-tooltip>
              
              <v-tooltip bottom v-if="$store.state.permissions['tareas:update']">
                <v-btn
                  icon
                  slot="activator"
                  @click.native="editItem(items.item.id, 'tarea', dataGraphql)">
                  <v-icon>edit</v-icon>
                </v-btn>
                <span>Editar registro</span>
              </v-tooltip>

              <v-tooltip bottom v-if="$store.state.permissions['tareas:delete']">
                <v-btn
                  icon
                  slot="activator"
                  @click.native="deleteItem(items.item.id, 'tarea')">
                  <v-icon color="red">delete</v-icon>
                </v-btn>
                <span>Eliminar registro</span>
              </v-tooltip>
            </td>
          </template>
        </crud-table>
        <v-form
          @submit.prevent="save"
          v-model="valid"
          ref="form"
          lazy-validation
          v-else
          >
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs8>
                <v-text-field
                  name="nombre"
                  :label="$t('task.crud.name')"
                  id="nombre"
                  v-model="form.nombre"
                  autofocus
                  maxlength="150"
                  :rules="$validate(['required'])"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs4>
                <v-text-field
                  name="estado"
                  :label="$t('task.crud.status')"
                  id="estado"
                  v-model="form.estado"
                  
                ></v-text-field>
                <v-select
                  :items="items"
                  label="Standard"
                ></v-select>
              </v-flex>

              <v-flex xs6>
                <v-text-field
                  name="fecha"
                  :label="$t('task.crud.dateDo')"
                  id="fecha"
                  v-model="form.fecha"
                  

                ></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  name="hora"
                  :label="$t('task.crud.timeDo')"
                  id="hora"
                  v-model="form.hora"
                  

                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  name="descripcion"
                  :label="$t('task.crud.description')"
                  id="descripcion"
                  v-model="form.descripcion"
                  maxlength="500"
                  :counter="500"
                  :rules="$validate(['required'])"
                  required
                ></v-text-field>
              </v-flex>


            </v-layout>
          </v-container>
          <log-datos :data="logDatos" v-if="logDatos"></log-datos>
          <v-card-actions>
            <small class="error--text text-required">* Los campos son obligatorios</small>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              type="submit"
              :disabled="!valid">
              <v-icon>check</v-icon> Guardar cambios
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </section>
</template>
<script>

import CrudTable from '@/common/util/crud-table/CrudTable.vue';
import crud from '@/common/util/crud-table/mixins/crud-table';
import validate from '@/common/mixins/validate';
import token from '@/components/admin/modulo/mixins/token';
import LogDatos from '@/components/admin/usuario/LogDatos';
import logDatos from '@/components/admin/usuario/mixins/log-datos';

export default {
  mixins: [ crud, validate, token, logDatos ],
  created () {
    this.user = this.$storage.getUser();
    this.idTarea = this.user.id_tarea;
  },
  mounted () {
    if (this.$util.isRol('ADMIN', 'USUARIO')) {
      this.editItem(this.user.id_tarea, 'tarea', this.dataGraphql, false);
    }
  },
  data () {
    return {
      logDatos: null,
      successAlert: false,
      graphql: true, // Definiendo el CRUD con Graphql
      // ruta de consulta
      url: 'tareas',
      // cabeceras de table
      headers: [
        { text: this.$t('task.crud.name'), value: 'nombre' },
        { text: this.$t('task.crud.dateDo'), value: 'fecha' },
        { text: this.$t('task.crud.timeDo'), value: 'hora' },
        { text: this.$t('common.status'), value: 'estado' },
        { text: this.$t('common.actions'), sortable: false }
      ],
      form: {
        nombre: '',
        fecha: '',
        hora: '',
        descripcion: '',
        estado: ''
      },
      dataGraphql: `
        id
        nombre
        estado
        fecha
        hora
        descripcion
        _user_created
        _user_updated
        _created_at
        _updated_at
      `,

      idTarea: null,
      valid: true
    };
  },
  methods: {
    openModal (data = {}, form = true) {
      this.valid = true;
      this.$refs.form.reset();
      this.logDatos = null;
      if (data.id) {
        this.$nextTick(() => {
          this.logDatos = this.getLogDatos(data);
          this.form = data;
        });
      } else {
        this.form = {
          nombre: '',
          fecha: '',
          hora: '',
          descripcion: '',
          estado: ''
        };
      }
      if (form) {
        this.$store.commit('openModal');
      }
    },
    save () {
      if (this.$refs.form.validate()) {
        if (data.id) {
          delete data.id;
          this.$service.graphql({
            query: `
              mutation edit($id: ID!, $tarea: EditTarea!) {
                tareaEdit(id: $id, tarea: $tarea) {
                  id
                }
              }
            `,
            variables: {
              id: this.form.id,
              tarea: data
            }
          }).then(response => {
            if (response) {
              this.$store.commit('closeModal');
              this.updateList();
              this.$message.success('Se actualizó el registro correctamente');
            }
          });
        } else {
          data.estado = 'ACTIVO';
          this.$service.graphql({
            query: `
              mutation add($tarea: NewTarea!) {
                tareaAdd(tarea: $tarea) {
                  id
                }
              }
            `,
            variables: {
              tarea: data
            }
          }).then(response => {
            if (response) {
              this.$store.commit('closeModal');
              this.updateList();
              this.$message.success();
            }
          });
        }
      }
    },
    descargarTodo () {
      // TODO: Implementar función de sincronización con el portál único
    }
  },
  components: {
    CrudTable,
    LogDatos
  }
};
</script>
