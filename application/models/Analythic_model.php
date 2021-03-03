<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Analythic_model extends CI_Model
{
    private $_table = 'analythic';

    public function __construct()
    {
        parent::__construct();
    }

    public function list ()
    {
        $query = '
            SELECT 
                b.`id` as user_id,
                b.`name`,
                b.`email`,
                a.`card`,
                a.`yes`,
                a.`no` 
            FROM `' . $this->_table . '` a 
            JOIN `users` b ON b.`id` = `a`.`user_id` 
            ORDER BY b.`name`
        ';

        return $this->db->query($query)->result();
    }

    public function setYes ($user_id, $card)
    {
        $this->user_id = $user_id;
        $this->card = $card;
        $this->db->where('user_id', $this->user_id);
        $this->db->where('card', $this->card);
        $card_chosen = $this->db->get($this->_table)->row();

        $this->yes = 1;
        if ($card_chosen) {
            $this->yes = $card_chosen->yes + 1;
            $this->db->where('user_id', $this->user_id);
            $this->db->where('card', $this->card);
            $this->db->update($this->_table, $this);
        } else {
            $this->db->insert($this->_table, $this);
        }
    }

    public function setNo ($user_id, $card)
    {
        $this->user_id = $user_id;
        $this->card = $card;
        $this->db->where('user_id', $this->user_id);
        $this->db->where('card', $this->card);
        $card_chosen = $this->db->get($this->_table)->row();

        $this->no = 1;
        if ($card_chosen) {
            $this->no = $card_chosen->no + 1;
            $this->db->where('user_id', $this->user_id);
            $this->db->where('card', $this->card);
            $this->db->update($this->_table, $this);
        } else {
            $this->db->insert($this->_table, $this);
        }
    }
}
