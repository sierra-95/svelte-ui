<script>
    export let size = 50;        
    export let thickness = 4;    
    export let color = '#3b82f6';
    const radius = (size - thickness) / 2;
    const circumference = 2 * Math.PI * radius;
  </script>
  
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    class="spinner"
  >
    <circle
      cx={size / 2}
      cy={size / 2}
      r={radius}
      fill="none"
      stroke="#e5e7eb" 
      stroke-width={thickness}
    />
    <circle
      cx={size / 2}
      cy={size / 2}
      r={radius}
      fill="none"
      stroke={color}
      stroke-width={thickness}
      stroke-linecap="round"
      stroke-dasharray={circumference}
      stroke-dashoffset={circumference * 0.25}
    />
  </svg>
  
  <style>
    .spinner {
      animation: spin 1s linear infinite;
    }
  
    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  
    svg {
      display: block;
    }
  
    circle {
      transform-origin: center;
    }
  </style>
  