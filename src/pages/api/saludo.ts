export default function handler(req:any, res:any) {
  if (req.method === 'GET') {
    const { tipo } = req.query;

    if (tipo === 'saludo') {
      res.status(200).json({ message: '[GET] Bienvenido a NextJS' });
    } else if (tipo === 'dios') {
      res.status(200).json({ message: '[GET] Javi es DIOS' });
    } else {
      res.status(400).json({ message: '[GET] Tipo de saludo no reconocido' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
