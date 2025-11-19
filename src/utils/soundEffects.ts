// Sistema de efeitos sonoros aprimorado usando Web Audio API
class SoundEffects {
  private audioContext: AudioContext | null = null;

  private initAudioContext() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return this.audioContext;
  }

  private createReverb(ctx: AudioContext, duration: number = 2, decay: number = 2) {
    const convolver = ctx.createConvolver();
    const rate = ctx.sampleRate;
    const length = rate * duration;
    const impulse = ctx.createBuffer(2, length, rate);
    const impulseL = impulse.getChannelData(0);
    const impulseR = impulse.getChannelData(1);

    for (let i = 0; i < length; i++) {
      const n = length - i;
      impulseL[i] = (Math.random() * 2 - 1) * Math.pow(n / length, decay);
      impulseR[i] = (Math.random() * 2 - 1) * Math.pow(n / length, decay);
    }
    convolver.buffer = impulse;
    return convolver;
  }

  // Som de notificação/mensagem elegante
  playNotification() {
    const ctx = this.initAudioContext();
    const now = ctx.currentTime;
    
    // Nota principal
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(800, now);
    gain1.gain.setValueAtTime(0.15, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.3);

    // Harmônico
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1200, now + 0.05);
    gain2.gain.setValueAtTime(0.1, now + 0.05);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.05);
    osc2.stop(now + 0.35);
  }

  // Som de suspense/tensão cinematográfico
  playSuspense() {
    const ctx = this.initAudioContext();
    const now = ctx.currentTime;
    
    // Drone profundo
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    const filter1 = ctx.createBiquadFilter();
    
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(55, now);
    osc1.frequency.linearRampToValueAtTime(45, now + 3);
    
    filter1.type = 'lowpass';
    filter1.frequency.setValueAtTime(300, now);
    filter1.Q.setValueAtTime(5, now);
    
    gain1.gain.setValueAtTime(0, now);
    gain1.gain.linearRampToValueAtTime(0.15, now + 0.5);
    gain1.gain.linearRampToValueAtTime(0.1, now + 2.5);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 3);
    
    osc1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(ctx.destination);
    
    osc1.start(now);
    osc1.stop(now + 3);

    // Textura alta
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    const filter2 = ctx.createBiquadFilter();
    
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1800, now);
    osc2.frequency.linearRampToValueAtTime(2200, now + 3);
    
    filter2.type = 'highpass';
    filter2.frequency.setValueAtTime(1500, now);
    
    gain2.gain.setValueAtTime(0, now);
    gain2.gain.linearRampToValueAtTime(0.05, now + 1);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 3);
    
    osc2.connect(filter2);
    filter2.connect(gain2);
    gain2.connect(ctx.destination);
    
    osc2.start(now);
    osc2.stop(now + 3);
  }

  // Som de heartbeat/batida do coração realista
  playHeartbeat() {
    const ctx = this.initAudioContext();
    const now = ctx.currentTime;
    
    for (let beat = 0; beat < 2; beat++) {
      const time = now + beat * 0.8;
      
      // Primeiro som (lub)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      const filter1 = ctx.createBiquadFilter();
      
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(80, time);
      osc1.frequency.exponentialRampToValueAtTime(40, time + 0.15);
      
      filter1.type = 'lowpass';
      filter1.frequency.setValueAtTime(200, time);
      
      gain1.gain.setValueAtTime(0.3, time);
      gain1.gain.exponentialRampToValueAtTime(0.01, time + 0.15);
      
      osc1.connect(filter1);
      filter1.connect(gain1);
      gain1.connect(ctx.destination);
      
      osc1.start(time);
      osc1.stop(time + 0.15);
      
      // Segundo som (dub)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      const filter2 = ctx.createBiquadFilter();
      
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(60, time + 0.2);
      osc2.frequency.exponentialRampToValueAtTime(30, time + 0.3);
      
      filter2.type = 'lowpass';
      filter2.frequency.setValueAtTime(150, time + 0.2);
      
      gain2.gain.setValueAtTime(0.25, time + 0.2);
      gain2.gain.exponentialRampToValueAtTime(0.01, time + 0.3);
      
      osc2.connect(filter2);
      filter2.connect(gain2);
      gain2.connect(ctx.destination);
      
      osc2.start(time + 0.2);
      osc2.stop(time + 0.3);
    }
  }

  // Som de escolha/decisão sofisticado
  playChoice() {
    const ctx = this.initAudioContext();
    const now = ctx.currentTime;
    
    // Tom principal
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523.25, now); // C5
    gain1.gain.setValueAtTime(0.12, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.2);
    
    // Harmônico
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(659.25, now + 0.05); // E5
    gain2.gain.setValueAtTime(0.08, now + 0.05);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.05);
    osc2.stop(now + 0.25);
    
    // Quinta
    const osc3 = ctx.createOscillator();
    const gain3 = ctx.createGain();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(783.99, now + 0.1); // G5
    gain3.gain.setValueAtTime(0.06, now + 0.1);
    gain3.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc3.connect(gain3);
    gain3.connect(ctx.destination);
    osc3.start(now + 0.1);
    osc3.stop(now + 0.3);
  }

  // Som de medo/susto intenso
  playJumpscare() {
    const ctx = this.initAudioContext();
    const now = ctx.currentTime;
    
    // Impacto baixo
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    const filter1 = ctx.createBiquadFilter();
    
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(100, now);
    osc1.frequency.exponentialRampToValueAtTime(30, now + 0.4);
    
    filter1.type = 'lowpass';
    filter1.frequency.setValueAtTime(500, now);
    filter1.frequency.exponentialRampToValueAtTime(50, now + 0.4);
    
    gain1.gain.setValueAtTime(0.4, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
    
    osc1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(ctx.destination);
    
    osc1.start(now);
    osc1.stop(now + 0.4);
    
    // Ruído branco
    const bufferSize = ctx.sampleRate * 0.3;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    
    const noise = ctx.createBufferSource();
    const noiseGain = ctx.createGain();
    const noiseFilter = ctx.createBiquadFilter();
    
    noise.buffer = buffer;
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.setValueAtTime(2000, now);
    
    noiseGain.gain.setValueAtTime(0.2, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    
    noise.start(now);
  }

  // Som ambiente sombrio e envolvente
  playAmbient() {
    const ctx = this.initAudioContext();
    const now = ctx.currentTime;
    
    // Drone grave
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    const filter1 = ctx.createBiquadFilter();
    const reverb1 = this.createReverb(ctx, 3, 3);
    const reverbGain1 = ctx.createGain();
    
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(65.41, now); // C2
    
    filter1.type = 'lowpass';
    filter1.frequency.setValueAtTime(200, now);
    filter1.Q.setValueAtTime(8, now);
    
    gain1.gain.setValueAtTime(0, now);
    gain1.gain.linearRampToValueAtTime(0.12, now + 1);
    gain1.gain.linearRampToValueAtTime(0.08, now + 3);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 4);
    
    reverbGain1.gain.setValueAtTime(0.3, now);
    
    osc1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(reverb1);
    reverb1.connect(reverbGain1);
    reverbGain1.connect(ctx.destination);
    gain1.connect(ctx.destination);
    
    osc1.start(now);
    osc1.stop(now + 4);
    
    // Textura etérea
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    const filter2 = ctx.createBiquadFilter();
    
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1046.50, now); // C6
    osc2.frequency.linearRampToValueAtTime(987.77, now + 4); // B5
    
    filter2.type = 'bandpass';
    filter2.frequency.setValueAtTime(1000, now);
    filter2.Q.setValueAtTime(15, now);
    
    gain2.gain.setValueAtTime(0, now);
    gain2.gain.linearRampToValueAtTime(0.04, now + 1.5);
    gain2.gain.linearRampToValueAtTime(0.03, now + 3);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 4);
    
    osc2.connect(filter2);
    filter2.connect(gain2);
    gain2.connect(ctx.destination);
    
    osc2.start(now);
    osc2.stop(now + 4);
  }
}

export const soundEffects = new SoundEffects();
