<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Node extends Model
{
    private function formatMenu($menus) {
        $data = [];
        foreach ($menus as $v) {
            if ($v->depth == 1) {
                $data[$v->id] = $v;
            }
        }

        // 使 sort_factor 起作用，分两次循环(仅用 code 排序时，循环一次就够了)
        foreach ($menus as $v) {
            if ($v->depth == 2) {
                $data[$v->pid]->children[] = $v;
            }
        }
        return array_values($data);
    }

    public function getFormatMenu() {
        $menus = json_decode(json_encode($this->getMenu()));
        return $this->formatMenu($menus);
    }

    private function getMenu() {
        $result = DB::table('nodes')
                    ->where([
                        ['type', '0'],
                        ['status', '0'],
                    ])
                    ->orderBy('sort_factor')
                    ->get();

        return $result;
    }
}
