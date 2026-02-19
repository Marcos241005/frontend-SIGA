<script>
import { 
    LayoutDashboard, 
    Users, 
    GraduationCap, 
    Calendar, 
    Settings, 
    LogOut,
    Menu
} from 'lucide-svelte';

let menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Estudiantes', icon: Users, href: '/estudiantes' },
    { name: 'Calificaciones', icon: GraduationCap, href: '/notas' },
    { name: 'Horarios', icon: Calendar, href: '/horarios' },
    { name: 'Configuración', icon: Settings, href: '/config' },
];
</script>

<nav class="w-full bg-slate-950 text-slate-300 border-b border-slate-800 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div class="flex items-center gap-8">
            <div class="flex items-center gap-2">
                <span class="text-xl font-bold text-white tracking-tight">SIGA</span>
        </div>

        <div class="hidden md:flex items-center gap-1">
            {#each menuItems as item}
            <a 
                href={item.href} 
                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-900 hover:text-white transition-all text-sm font-medium"
            >
                <svelte:component this={item.icon} size={18} />
                <span>{item.name}</span>
            </a>
            {/each}
        </div>
    </div>

    <div class="flex items-center gap-4">
        <button class="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-950/30 rounded-md transition-colors">
            <LogOut size={18} />
            <span>Salir</span>
        </button>
            <button class="md:hidden p-2 hover:bg-slate-900 rounded-md">
                <Menu size={24} />
            </button>
        </div>
    </div>
</nav>