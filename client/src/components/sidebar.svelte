<script>
    import { 
        LayoutDashboard, 
        Users, 
        GraduationCap, 
        Calendar, 
        Settings, 
        LogOut 
    } from 'lucide-svelte';

let menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Estudiantes', icon: Users, href: '/estudiantes' },
    { name: 'Calificaciones', icon: GraduationCap, href: '/notas' },
    { name: 'Horarios', icon: Calendar, href: '/horarios' },
    { name: 'Configuración', icon: Settings, href: '/config' }, 
    ];
</script>

<aside class="w-64 h-screen bg-slate-950 text-slate-300 flex flex-col fixed left-0 top-0 border-r border-slate-800">
<div class="p-6">
    <div class="flex items-center gap-2 mb-2">
            <h2 class="text-xl font-bold text-white tracking-tight">SIGA</h2>
        </div>
    <p class="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Gestión Académica</p>
</div>

<nav class="flex-1 px-4 py-2 space-y-1">
    {#each menuItems as item}
    <a 
        href={item.href} 
        class="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-slate-900 hover:text-white transition-all group"
    >
        <svelte:component this={item.icon} size={20} class="group-hover:text-blue-400" />
        <span class="text-sm font-medium">{item.name}</span>
    </a>
    {/each}
</nav>

<div class="p-4 border-t border-slate-800">
    <button class="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:bg-red-950/30 rounded-md transition-colors">
    <LogOut size={18} />
    <span>Cerrar Sesión</span>
    </button>
</div>
</aside>