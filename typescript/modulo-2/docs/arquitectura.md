# MODELO DE ESTRUCTURA:
he utilizado inteface porque tengo datos más robustos, claros y poder definir el tipo que será, ya que, un solo type no seria correcto seleccionar para los tipos de datos, tambien porque si en el futuro quiero agregar más datos, no seria problema alguno.

se utilizo type para la union discriminada en EstadoMatricula
porque los types permiten crear uniones en este caso: activa, suspendida, finalizada.

# GENERICOS
Hace que pueda reutilizarlos.
La interfaz de respuetsa API actúa como una variable estándar, esto garantiza que todas las respuestas del servidor tengan siempre la misma estructura, mientras que el contenido real datos varía dinámicamente según lo que el programador solicite.
