<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Card extends CI_Controller
{
	public function __construct ()
	{
        parent::__construct();
        
		$this->load->model('analythic_model');
    }

	private function template ($view_file, $data = null)
	{
		$this->load->view('partials/header');
		$this->load->view($view_file, $data);
		$this->load->view('partials/footer');
	}

    public function documentation ($card)
    {
        switch ($card) {
            case 'A':
                $this->template('cards/doc-a');
                break;
            case 'B':
                $this->template('cards/doc-b');
                break;
            case 'C':
                $this->template('cards/doc-c');
                break;
            case 'D':
                $this->template('cards/doc-d');
                break;
            default:
                $this->template('cards/doc-a');
                break;
        }
    }

    public function choose ()
    {
        $this->template('cards');
    }

    public function quiz ($card)
    {
        $data['card'] = $card;
        $data['user_id'] = $this->session->userdata('user_id');

        $this->template('cards/' . $card, $data);
    }

    public function setYes ($user_id, $card)
    {
        $this->analythic_model->setYes($user_id, $card);
    }

    public function setNo ($user_id, $card)
    {
        $this->analythic_model->setNo($user_id, $card);
    }
}