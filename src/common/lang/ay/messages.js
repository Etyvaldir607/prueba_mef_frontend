import error from './errors';
import validate from './validates';
import menu from './menu';
import vuetify from './vuetify';

export default {
  error,
  validate,
  menu,
  $vuetify: vuetify,
  app: {
    title: 'Base frontend',
    account: `Atamiri sart'awixa`,
    settings: 'Wakichawinaka',
    logOut: `Sart'awi tukuyaña`
  },
  login: {
    title: `Sart'awima qalltama`,
    user: 'Atamiri jaqi suti',
    password: `Aru imt'ata`,
    rememberMe: 'Amtasita',
    forgotPass: `¿Armastati aru imt'añama?`,
    login: 'Mantaña',
    noAccount: '¿Janit atamirina qillqataqta?',
    signUp: 'Akxaru qillqantasima'
  },
  common: {
    add: `Yapt'aña`,
    required: `Qillqañatakipuni`,
    cancel: 'Chhaqtayaña',
    save: 'Imaña',
    rowsPage: 'siqinaka, laphi layku',
    updateList: `Wasitata waruchaña `,
    filters: `Ch'umaña/Thaqhaña`,
    of: 'de',
    active: `Q'apha`,
    observation: 'Observación',
    firm: 'Firma',
    edit: 'Qillqsuña',
    status: 'Estado',
    actions: `Lurañanaka`,
    close: 'Cerrar'
  },
  entity: {
    title: `Jach'a utanaka`,
    add: `Machaqa jach'a uta yapt'aña`,
    crud: {
      edit: 'Qillqsuyaña',
      code: 'Código',
      name: 'Nombre',
      acronym: `Jisk'a suti`,
      description: 'Amuykipawinaka',
      status: 'Estado',
      addEnt: `jach'a uta yapt'aña`,
      editEnt: `jach'a uta qillqsuña`,
      address: 'Dirección',
      email: 'Correo electrónico',
      phones: 'Teléfono(s)',
      web: 'Página web de la institución',
      user_ppte: 'Usuario en el sistema PPTE',
      pass_ppte: 'Contraseña en el sistema PPTE'
    }
  },
  account: {
    title: `Atamiri sart'awinaka`,
    add: `Machaqa atamiri sart'awi`,
    select: `Jach'a uta ajllima, atamiri sart'awinaka uñjañataki`,
    crud: {
      edit: 'Qillqsuña',
      accountNumber: `Atamiri sart'awi jakhupa`,
      status: 'Estado',
      entity: `Jach'a uta`,
      addAc: `Atamiri sart'awi yapt'aña`,
      editAc: `Atamiri sart'awi qillqsuña`
    }
  },
  user: {
    title: 'Usuarios',
    add: 'Agregar nuevo usuario',
    crud: {
      edit: 'Editar',
      user: 'Usuario',
      userData: 'Datos del usuario',
      entity: 'Entidad',
      role: 'Rol',
      status: 'Estado',
      addUser: 'Agregar usuario',
      editUser: 'Editar usuario',
      fullname: 'Nombre completo',
      email: 'Correo electrónico'
    }
  },
  rol: {
    title: 'Roles',
    add: 'Agregar nuevo rol',
    crud: {
      name: 'Nombre',
      description: 'Descripción',
      tipo: 'Tipo',
      path: 'Ruta',
      editRol: 'Editar Rol',
      addRol: 'Agregar Rol'
    }
  },
  parametro: {
    title: 'Parámetros',
    add: 'Agregar nuevo parámetro',
    preferencias: 'Preferencias',
    crud: {
      name: 'Nombre',
      value: 'Valor',
      label: 'Label',
      description: 'Descripción',
      editParametro: 'Editar Parámetro',
      addParametro: 'Agregar Parámetro'
    }
  },
  module: {
    title: 'Módulos',
    add: 'Agregar nuevo módulo',
    crud: {
      edit: 'Editar',
      module: 'Módulo',
      label: 'Título',
      path: 'Path',
      icon: 'Ícono',
      order: 'Orden',
      status: 'Estado',
      visible: 'Visible',
      is_visible: 'Es visible',
      submodule: 'Sub módulo',
      section: 'Sección',
      addModule: 'Agregar módulo',
      editModule: 'Editar módulo',
      permissions: 'Permisos'
    }
  },
  log: {
    title: 'Logs del sistema',
    crud: {
      nivel: 'Nivel',
      tipo: 'Tipo',
      mensaje: 'Mensaje',
      referencia: 'Referencia',
      ip: 'IP',
      path: 'Ruta',
      fecha: 'Fecha de creación',
      usuario: 'Usuario'
    }
  },
  servicioIop: {
    title: 'Interoperabilidad',
    add: 'Agregar nuevo servicio',
    crud: {
      codigo: 'Código',
      metodo: 'Método',
      descripcion: 'Descripción',
      entidad: 'Entidad',
      url: 'Url',
      token: 'Token',
      tipo: 'Tipo',
      estado: 'Estado',
      editServicio: 'Editar Servicio Iop',
      addServicio: 'Agregar Servicio Iop'
    }
  },
  task: {
    title: 'Tareas',
    add: 'Agregar nueva Tarea',
    crud: {
      edit: 'Editar',
      name: 'Nombre',
      dateDo: 'Fecha de realización',
      timeDo: 'Hora de realización',
      description: 'Descripción',
      status: 'Estado',
      addEnt: 'Agregar tarea',
      editEnt: 'Editar tarea'
    }
  }
};
