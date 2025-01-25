/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false, // Desativa o comportamento ao clicar
          },
          onHover: {
            enable: false, // Desativa o comportamento ao passar o mouse
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF", // Cor das partículas
        },
        links: {
          color: "#FFFFFF", // Cor dos links entre partículas
          distance: 150, // Distância entre partículas conectadas
          enable: true,
          opacity: 0.0, // Opacidade dos links
          width: 1, // Largura dos links
        },
        move: {
          direction: "none", // Movimento aleatório
          enable: true,
          outModes: {
            default: "bounce", // Faz as partículas quicarem
          },
          random: true,
          speed: 1, // Velocidade do movimento
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150, // Número de partículas
        },
        opacity: {
          value: 0.3, // Ajuste da opacidade das partículas
        },
        shape: {
          type: "circle", // Formato das partículas
        },
        size: {
          value: { min: 1, max: 3 }, // Tamanho das partículas
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id={props.id}
      init={async (engine) => {
        await loadSlim(engine); // Carregando o motor slim diretamente
      }}
      options={options}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesComponent;
